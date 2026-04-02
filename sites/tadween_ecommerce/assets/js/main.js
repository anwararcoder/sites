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

    
    // :: Add Class Active To Search Box
    $('.search-icon.open').on('click', function () {
        $('.search-box').css('display','flex');
    });
    $('.search-box, .search-box-icon.exit').on('click', function () {
        $('.search-box').css('display','none');
    });
    $('.search-box form').on('click', function (e) {
        e.stopPropagation();
    });
    
    // :: OWL Carousel Js Center News
    $(".header-carousel").owlCarousel({
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 0,
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

    // :: OWL Carousel Js Scientific Bodies Carousel
    $(".single-shop-carousel").owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: false,
         autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 20,
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
                items: 3,
            },
            991: {
                items: 4,
            },
        },
    });

    // :: Range Slider
    $(".js-range-slider").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });

    rating.create({
        selector: "#rating-1",
        outOf: 5,
        defaultRating: 5
    });
    rating.create({
        selector: "#rating-2",
        outOf: 5,
        defaultRating: 4
    });
    rating.create({
        selector: "#rating-3",
        outOf: 5,
        defaultRating: 3
    });
    rating.create({
        selector: "#rating-4",
        outOf: 5,
        defaultRating: 2
    });
    rating.create({
        selector: "#rating-5",
        outOf: 5,
        defaultRating: 1
    });

    const imgElements = document.querySelectorAll('.page-rating img');
    imgElements.forEach((img) => {
        img.setAttribute('alt', 'Star');
    });
    
    // :: NiceSelect Plugin
    $('select').niceSelect();

    // :: Magnific Popup Plugin
    $('a.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    const numberInputs = document.querySelectorAll("input#counterNumber");
    const incrementButtons = document.querySelectorAll("span#counterIncrement");
    const decrementButtons = document.querySelectorAll("span#counterDecrement");
    
    for (let i = 0; i < numberInputs.length; i++) {
      const numberInput = numberInputs[i];
      const incrementButton = incrementButtons[i];
      const decrementButton = decrementButtons[i];
    
      incrementButton.addEventListener("click", () => {
        numberInput.value++;
      });
    
      decrementButton.addEventListener("click", () => {
        if(numberInput.value > 1){
            return numberInput.value--;
        }else{
            return;
        }
      });
    }
})();