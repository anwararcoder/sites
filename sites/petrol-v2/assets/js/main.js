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
        if ($(window).scrollTop() > ($('.nav-bar').height())) {
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

    // :: OWL Carousel Js Header Hero
    $('.header-owl').owlCarousel({
        loop: true,
        nav:true,
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
                items: 5
            },
            1200: {
                items: 7
            }
        }
    });
    // :: OWL Carousel Js Statistic
    $('.box-info').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
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
    
    // :: Counter Up Js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    // :: NiceSelect Plugin
    $('select').niceSelect();
    
    // :: Add Class Active On Go To Header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
    });
    
}());