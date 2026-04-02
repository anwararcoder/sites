/*
::
:: Theme Name: Kernel - Personal Portfolio Responsive HTML5 Template
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

    // :: Add Class Active To Color Box
    $('.color-box .open-color-box').on('click', function () {
        $('.color-box').toggleClass('active');
    });
    $('.color-box .colors li').on('click', function () {
        $(':root').css('--maincolor', $(this).data('color'));
        $(':root').css('--seccolor', $(this).data('color2'));
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

    // :: CounterUp Plugin
    $('.count').counterUp({
        delay: 5,
        time: 1000
    });

    // :: Add Class Active On Go To Header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
    });

    // :: Add Class Active To Navbar (.list-name-portfolio li)
    $('.portfolio .list-name-portfolio li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // :: Setup Mixitup
    var containerEl = document.querySelector('.all-portfolio');
    var mixer = mixitup(containerEl);

    // :: Magnific Popup Plugin
    $('.portfolio .portfolio-img-box .portfolio-box-hover').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // :: Owl Carousel Plugin
    $('.experience-content').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
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
    $('.clients-box').owlCarousel({
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
    $('.sponsors-box').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

}());