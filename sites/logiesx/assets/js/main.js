/*
::
:: Theme Name: LogiesX - Logistics & Transportation HTML Template
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

    // :: Add Class Active To Color Box
    $('.color-box .open-color-box').on('click', function () {
        $('.color-box').toggleClass('active');
    });
    $('.color-box .colors li').on('click', function () {
        $(':root').css('--mainColor', $(this).data('color'));
        $(':root').css('--mainColorRGB', $(this).data('rgb'));
    });

    // :: Scroll Smooth To Go Section
    $('.move-section').on('click', function (e) {
        e.preventDefault();
        var anchorLink = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchorLink.attr('href')).offset().top + 1
        }, 1000);
    });

    var zeroValue = 0;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 50) {
            $('.nav-bar').removeClass('active')
            $('.all-navbar').removeClass('active')
        } else {
            $('.nav-bar').addClass('active')
            $('.all-navbar').addClass('active')
        }
        $('.nav-bar').toggleClass('hide', $(window).scrollTop() > zeroValue);
        zeroValue = $(window).scrollTop();
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
    $('.search-icon.open').on('click', function () {
        $('.search-box').css('display', 'flex');
    });
    $('.search-box, .search-box-icon.exit').on('click', function () {
        $('.search-box').css('display', 'none');
    });
    $('.search-box form').on('click', function (e) {
        e.stopPropagation();
    });

    // :: OWL Carousel Js Header
    $('.header-ar-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="ar-icons-arrow-left"></i>', '<i class="ar-icons-arrow-right"></i>'],
        dotsClass: ['container', 'owl-dots'],
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

    // :: Animation OWL Header
    $('.header-ar-carousel').on('translate.owl.carousel', function () {
        $('.header-ar-carousel .banner').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .headline').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .about-website').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .feauture-icons li').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .btn-box a.btn-1:first-of-type').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .btn-box a.btn-1:last-of-type').removeClass('animated fadeInUp').css('opacity', '0');
    });
    $('.header-ar-carousel').on('translated.owl.carousel', function () {
        $('.header-ar-carousel .banner').removeClass('animated fadeIn').css('opacity', '1');
        $('.header .banner .headline').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .about-website').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .feauture-icons li').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .btn-box a.btn-1:first-of-type').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .btn-box a.btn-1:last-of-type').addClass('animated fadeInUp').css('opacity', '1');
    });

    // :: OWL Carousel Js Services Item
    $('.services-ar-carousel').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: false,
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
            },
            1199: {
                items: 3
            },
            1399: {
                items: 4
            }
        }
    });

    // :: OWL Carousel Js Sponsors Carousel
    $('.sponsors-ar-carousel').owlCarousel({
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
                items: 5
            },
            991: {
                items: 7
            }
        }
    });

    // :: NiceSelect Plugin
    $('select').niceSelect();

    // :: OWL Carousel Js Case Studies Item
    $('.case-studies-ar-carousel').owlCarousel({
        loop: true,
        margin: 30,
        center: true,
        smartSpeed: 2000,
        autoplay: 3000,
        nav: false,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1
            },
            768: {
                items: 2
            },
        }
    });
    // :: OWL Carousel Js Services Item
    $('.case-studies-ar-carousel-2').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: false,
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
                items: 2
            },
            1199: {
                items: 3
            }
        }
    });


    // :: Counter Up Js
    if ($(".counter")[0]) {
        $('.counter').counterUp({
            delay: 20,
            time: 1000
        })
    }

    // :: OWL Carousel Js Testimonial
    $('.testimonial-ar-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navText: ['<i class="ar-icons-arrow-left"></i>', '<i class="ar-icons-arrow-right"></i>'],
        autoplay: false,
        center: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        mouseDrag: true,
        touchDrag: true,
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
    
    $('.testimonial-ar-carousel').on('translated.owl.carousel', function (event) {
        var activeIndex = (event.item.index - 2);
        $('.testimonial .testimonial-dots li').removeClass('active');
        $('.testimonial .testimonial-dots li').eq(activeIndex).addClass('active');
    });
    
    $('.testimonial-ar-carousel').on('changed.owl.carousel', function (event) {
        var activeIndex = (event.item.index - 2);
        $('.testimonial .testimonial-dots li').removeClass('active');
        $('.testimonial .testimonial-dots li').eq(activeIndex).addClass('active');
    });
    
    // :: OWL Carousel Js Features Item
    $('.features-ar-carousel').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: false,
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
            },
            1199: {
                items: 3
            },
            1399: {
                items: 4
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
    

    // Get the elements
    const quantityValueElement = $("#quantityValue");
    const increaseBtn = $("#increaseBtn");
    const decreaseBtn = $("#decreaseBtn");
    let quantityValueNumber = 1;

    // Initial value
    quantityValueElement.text(quantityValueNumber);

    // Event listeners for buttons
    increaseBtn.on("click", function () {
        quantityValueNumber++;
        quantityValueElement.text(quantityValueNumber);
    });
    decreaseBtn.on("click", function () {
        if (quantityValueNumber <= 1) {
            return;
        }
        quantityValueNumber--;
        quantityValueElement.text(quantityValueNumber);
    });


}());

$(document).ready(function () {
    // :: Setup mouseenter On Services Item
    $('.services-item, .country-item, .features-item, .provide-statistics .statistic-item').on('mouseenter', function (e) {
        x = e.pageX - $(this).offset().left,
            y = e.pageY - $(this).offset().top;
        $(this).find('span').css({
            top: y,
            left: x
        });
    });
    $('.services-item, .country-item, .features-item, .provide-statistics .statistic-item').on('mouseout', function (e) {
        x = e.pageX - $(this).offset().left,
            y = e.pageY - $(this).offset().top;
        $(this).find('span').css({
            top: y,
            left: x
        });
    });

    // :: Team Item
    var textBoxStyle = $('.team.home-2 .team-item .text-box-style-2');
    textBoxStyle.each(function (index, element) {
        var elementHeight = $(element).height();
        $(element).parent().hover(
            function () {
                $(element).css({
                    "margin-top": -elementHeight
                });
            },
            function () {
                $(element).css({
                    "margin-top": '0'
                });
            }
        );
    });

    // :: Range Slider
    $(".js-range-slider").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });

});