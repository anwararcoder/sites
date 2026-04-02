(function () {
    "use strict";
    // :: Add Class Active For ('.nav-bar')
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 30) {
            $(".nav-bar").addClass("active");
            $(".top-nav-bar").addClass("active");
        } else {
            $(".nav-bar").removeClass("active");
            $(".top-nav-bar").removeClass("active");
        }
    });

    // :: Open Navbar
    $(".open-nav-bar").on("click", function () {
        $(".nav-bar-menu").toggleClass("active");
    });

    var Zero = 0;
    $(window).on("scroll", function () {
        if ($(window).scrollTop() < 100) {
            $(".header-box").removeClass("active");
        } else {
            $(".header-box").addClass("active");
        }
        $(".header-box").toggleClass("hide", $(window).scrollTop() > Zero);
        Zero = $(window).scrollTop();
    });

    // :: OWL Carousel Js Center Services
    $(".header-carousel").owlCarousel({
        loop: true,
        margin: 0,
        rtl: true,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: false,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            991: {
                items: 1,
            },
        },
    });
    
    // :: OWL Carousel Js Center Services
    $(".center-services-carousel").owlCarousel({
        loop: true,
        margin: 30,
        rtl: true,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            },
        },
    });

    // :: OWL Carousel Js Center News
    $(".center-news-carousel").owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 10,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            991: {
                items: 1,
            },
        },
    });

    // :: OWL Carousel Js Testimonial
    $(".testimonials-carousel").owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 30,
        center: false,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 2,
            },
        },
    });

    // :: OWL Carousel Js Sponsors Carousel
    $(".partners-carousel").owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
         autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 0,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 2,
            },
            575: {
                items: 3,
            },
            768: {
                items: 4,
            },
            991: {
                items: 6,
            },
        },
    });
    
    // :: OWL Carousel Js Scientific Bodies Carousel
    $(".scientific-bodies-carousel").owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
         autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 0,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 2,
            },
            575: {
                items: 3,
            },
            768: {
                items: 4,
            },
            991: {
                items: 6,
            },
        },
    });
    
    // :: OWL Carousel Js Recent Statistics Carousel
    $(".recent-statistics-carousel").owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
         autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 30,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            768: {
                items: 3,
            },
            991: {
                items: 4,
            },
        },
    });

    rating.create({
        selector: "#rating",
        outOf: 5,
    });

    const imgElements = document.querySelectorAll('#rating img');
    imgElements.forEach((img) => {
        img.setAttribute('alt', 'Star');
    });
    const dotElements = document.querySelectorAll('.owl-theme .owl-dots .owl-dot');
    dotElements.forEach((dot, index) => {
        dot.setAttribute('aria-label', `Dot-${index}`);
    });

    // :: Magnific Popup Plugin
    $('a.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

})();