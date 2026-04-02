/*
::
:: Theme Name: Mado - CV/Resume & Portfolio HTML Template
:: Email: arcoder14@gmail.com
:: Author URI: https://themeforest.net/user/ar-coder
:: Author: ar-coder
:: Version: 1.1
::
*/

(function () {
    'use strict';
    
    // :: Loading
    $(window).on('load', function () {
        $('.loading').fadeOut();
    });
    
    // :: Add Class Active To Navbar
    $('.pp-scrollable').scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }
    });
    
    // :: Open And Close Menu
    $('.open-menu').on('click', function () {
        $('.menu').fadeIn().addClass('active');
    });
    $('.menu').on('click', function () {
        $(this).fadeOut().removeClass('active');
    });
    $('.close-menu, .sub-menu li a').on('click', function () {
        $('.menu').fadeOut().removeClass('active');
    });
    $('.menu .inner-menu').on('click', function (e) {
        e.stopPropagation();
    });
    
    // :: Open And Close Search
    $('.open-search').on('click', function () {
        $('.search').fadeIn().addClass('active');
    });
    $('.search').on('click', function () {
        $(this).fadeOut().removeClass('active');
    });
    $('.search .inner-search').on('click', function (e) {
        e.stopPropagation();
    });
    
    // :: Add And Remove Class Active To Left Nav
    if ($('.section.about').hasClass('active')) {
        $('.left-nav').addClass('active')
    } else {
        $('.left-nav').removeClass('active')
    }
    
    // :: WoW Plugin
    new WOW().init();
    
    // :: PagePiling Plugin
    $('#pagepiling').pagepiling({
        menu: '#sub-menu',
        anchors: ['home', 'about', 'rusume', 'services', 'project', 'blog', 'testimonials', 'contact'],
        onLeave: function (){
            // :: On Leave Remove And Add Class Active To Navbar
            $('nav').removeClass('active');
            $('.pp-scrollable').scroll(function () {
                if ($(this).scrollTop() > 10) {
                    $('nav').addClass('active');
                } else {
                    $('nav').removeClass('active');
                }
            });
            
            // :: On Leave Remove And Add Class Active To Left Nav
            $('.left-nav').removeClass('active');
            if ($('.section.about').hasClass('active')) {
                $('.left-nav').addClass('active')
            } else {
                $('.left-nav').removeClass('active')
            }
        }
    });
    
    // :: Add Class Active To Navbar (.list-name-work li)
    $('.list-name-work li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // :: Setup Mixitup
    var containerEl = document.querySelector('.all-works');
    var mixer = mixitup(containerEl);

    // :: Magnific Popup Plugin
    $('.work-box .box-hover').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    // :: OWL Carousel Js Testimonials Carousel
    $('.testimonials-box').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='flaticon-brain-anterior'></i>", "<i class='flaticon-multimedia-option'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 30,
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
    
    // :: OWL Carousel Js Sponsors Carousel
    $('.sponsors-box').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
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
            1200: {
                items: 6
            }
        }
    });
    
}());