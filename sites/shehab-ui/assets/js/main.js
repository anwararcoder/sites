(function () {
  "use strict";

  // :: => Setup Swiper
  var swiper = new Swiper(".testimonials-swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
			el: ".swiper-pagination",
			clickable: true,
      },
  });
})();
