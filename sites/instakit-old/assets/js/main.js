(function () {
  "use strict";

  function handleScroll() {
    if (window.scrollY > 30) {
      document.querySelector(".nav-bar").classList.add("active");
    } else {
      document.querySelector(".nav-bar").classList.remove("active");
    }
    var headerBox = document.querySelector(".nav-bar");
    headerBox.classList.toggle("hide", window.scrollY > Zero);
    Zero = window.scrollY;
  }
  var Zero = 0;
  window.addEventListener("scroll", handleScroll);

  document.querySelector(".open-nav-bar").addEventListener("click", () => {
    document.querySelector(".nav-bar-menu").classList.toggle("active");
  });
  document.querySelector(".cancel-nav-bar").addEventListener("click", () => {
    document.querySelector(".nav-bar-menu").classList.toggle("active");
  });
  document.querySelector(".cancel-nav-bar-2").addEventListener("click", () => {
    document.querySelector(".nav-bar-menu").classList.toggle("active");
  });


  // if (window.innerWidth < 1024) {
  //   document.querySelector("#OurServices").addEventListener("click", () => {
  //     document.querySelector("#OurServicesContent").classList.toggle("hidden-important");
  //   });
  // }



  // document.querySelector(".cancel-nav-bar-2").addEventListener("click", () => {
  //   document.querySelector(".nav-bar-menu").classList.toggle("active");
  // });

  // :: Swiper Sponsors
  let sponsorsSwiper = new Swiper(".sponsors-swiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
      1536: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
    },
  });

  let sponsorsSwiper2 = new Swiper(".sponsors-swiper-2", {
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
      1536: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
    },
  });

  // :: Swiper Provider
  let providerSwiper = new Swiper(".provider-swiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".provider-button-next",
      prevEl: ".provider-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1536: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // :: Swiper Services
  let servicesSwiper = new Swiper(".services-swiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".services-button-next",
      prevEl: ".services-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1536: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
})();
