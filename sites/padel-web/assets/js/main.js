(function () {
  "use strict";
})();
document.addEventListener("DOMContentLoaded", function () {
  // Add Class Active When To (.header) When Scroll
  window.addEventListener("scroll", function () {
    if (window.pageYOffset < 100) {
      document.querySelector(".header").classList.remove("active");
    } else {
      document.querySelector(".header").classList.add("active");
    }
  });

  // Add Class Active When To (.all-navbar) When Scroll
  window.addEventListener("scroll", function () {
    if (window.pageYOffset < 50) {
      document.querySelector(".nav-bar").classList.remove("active");
    } else {
      document.querySelector(".nav-bar").classList.add("active");
    }
  });

  // Open Navbar Menu on Responsive
  document.querySelectorAll(".open-nav-bar").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("open-nav-bar-menu").classList.toggle("active");
    });
  });

  // Navbar Links Settings
  document.querySelectorAll(".has-menu > a").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".has-menu > a").forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          var nextElement = otherItem.nextElementSibling;
          if (nextElement.tagName === "UL") {
            nextElement.classList.remove("active");
          }
        }
      });
      item.classList.toggle("active");
      var nextElement = item.nextElementSibling;
      if (nextElement.tagName === "UL") {
        nextElement.classList.toggle("active");
      }
    });
  });

  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const menu = dropdown.querySelector(".dropdown-menu");

    button.addEventListener("click", () => {
      const isOpen = menu.style.display === "block";
      // Close all dropdown menus and remove "active" class from all buttons
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });
      document.querySelectorAll(".dropdown button").forEach((button) => {
        button.classList.remove("active");
      });

      if (!isOpen) {
        menu.style.display = "block";
        button.classList.add("active"); // Add "active" class to the clicked button
      }
    });
  });

  // Close dropdown if clicked outside
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.querySelector(".dropdown-menu").style.display = "none";
        dropdown.querySelector("button").classList.remove("active"); // Remove "active" class when closing the dropdown
      }
    });
  });

  // Make AR-Tabs
  document.querySelectorAll(".ar-tabs .tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var val = this.getAttribute("data-filterTab");

      // Remove 'active' class from all tabs
      document.querySelectorAll(".ar-tabs .tab").forEach(function (tab) {
        tab.classList.remove("active");
      });

      // Add 'active' class to all tabs with the same data-filterTab value
      document.querySelectorAll(".ar-tabs .tab").forEach(function (tab) {
        if (tab.getAttribute("data-filterTab") === val) {
          tab.classList.add("active");
        }
      });

      var rows = document.querySelectorAll(".ar-box-content");
      rows.forEach(function (row) {
        row.classList.add("tab-hide");
        if (row.getAttribute("data-filterTab") === val || val === "all") {
          row.classList.remove("tab-hide");
        }
      });
    });
  });

  // :: => Show And Hide Password
  const passwordToggle = document.querySelectorAll(".js-password-toggle");
  passwordToggle.forEach(function (toggle) {
    toggle.addEventListener("change", function () {
      const password = toggle.parentElement.nextElementSibling,
        passwordLabel =
          toggle.parentElement.querySelector(".js-password-label");
      if (password.type === "password") {
        password.type = "text";
        passwordLabel.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M14.522 14.7746C13.8338 15.405 12.9334 15.7532 12.0001 15.7496C11.2432 15.7495 10.5041 15.5204 9.87984 15.0924C9.25561 14.6644 8.77551 14.0575 8.50265 13.3515C8.22979 12.6455 8.17695 11.8735 8.35107 11.1369C8.52519 10.4003 8.91812 9.73369 9.47821 9.22461" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6.9375 6.43164C3.1125 8.36289 1.5 12.0004 1.5 12.0004C1.5 12.0004 4.5 18.7504 12 18.7504C13.7574 18.7647 15.4929 18.3598 17.0625 17.5691" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.5564 15.8531C21.6002 14.025 22.5002 12 22.5002 12C22.5002 12 19.5002 5.25002 12.0002 5.25002C11.35 5.24874 10.7008 5.30205 10.0596 5.4094" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12.7031 8.31592C13.5006 8.46702 14.2273 8.87342 14.7735 9.47377C15.3198 10.0741 15.6559 10.8359 15.7313 11.644" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>';
      } else {
        password.type = "password";
        passwordLabel.innerHTML =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.5 3.75L19.5 20.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14.522 14.7746C13.8338 15.405 12.9334 15.7532 12.0001 15.7496C11.2432 15.7495 10.5041 15.5204 9.87984 15.0924C9.25561 14.6644 8.77551 14.0575 8.50265 13.3515C8.22979 12.6455 8.17695 11.8735 8.35107 11.1369C8.52519 10.4003 8.91812 9.73369 9.47821 9.22461" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6.9375 6.43164C3.1125 8.36289 1.5 12.0004 1.5 12.0004C1.5 12.0004 4.5 18.7504 12 18.7504C13.7574 18.7647 15.4929 18.3598 17.0625 17.5691" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.5564 15.8531C21.6002 14.025 22.5002 12 22.5002 12C22.5002 12 19.5002 5.25002 12.0002 5.25002C11.35 5.24874 10.7008 5.30205 10.0596 5.4094" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12.7031 8.31592C13.5006 8.46702 14.2273 8.87342 14.7735 9.47377C15.3198 10.0741 15.6559 10.8359 15.7313 11.644" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>';
      }
      password.focus();
    });
  });

  // :: => Upload Image Box
  document.querySelectorAll('input[type="file"]').forEach((input) => {
    input.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imagePreview = document.getElementById(
            "image-preview-" + input.id.split("-")[2]
          );
          imagePreview.src = e.target.result;
          // imagePreview.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
      }
    });
  });

  // :: => Add class Active to Year & Day Item
  document
    .querySelectorAll(".YearsSwiper .swiper-wrapper .swiper-slide")
    .forEach(function (item) {
      item.addEventListener("click", function () {
        document
          .querySelectorAll(".YearsSwiper .swiper-wrapper .swiper-slide")
          .forEach(function (sibling) {
            sibling.classList.remove("active");
          });
        item.classList.add("active");
      });
    });
  document
    .querySelectorAll(".DaysSwiper .swiper-wrapper .swiper-slide")
    .forEach(function (item) {
      item.addEventListener("click", function () {
        document
          .querySelectorAll(".DaysSwiper .swiper-wrapper .swiper-slide")
          .forEach(function (sibling) {
            sibling.classList.remove("active");
          });
        item.classList.add("active");
      });
    });

  // :: => Collapse Section
  const buttons = document.querySelectorAll(".collapseButton");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const collapsibleSection = button.nextElementSibling;

      if (collapsibleSection.classList.contains("show")) {
        collapsibleSection.classList.remove("show");
        button.classList.remove("show");
      } else {
        const siblingSections = Array.from(
          button.parentElement.children
        ).filter(
          (child) =>
            child !== button && child.classList.contains("collapsibleSection")
        );
        const siblingButtons = Array.from(button.parentElement.children).filter(
          (child) =>
            child !== button && child.classList.contains("collapseButton")
        );
        siblingSections.forEach((section) => section.classList.remove("show"));
        siblingButtons.forEach((btn) => btn.classList.remove("show"));
        collapsibleSection.classList.add("show");
        button.classList.add("show");
      }
    });
  });

  // :: => Setup Swiper
  var YearsSwiper = new Swiper(".YearsSwiper", {
    slidesPerView: 5,
    spaceBetween: 12,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-year",
      prevEl: ".swiper-button-prev-year",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 12,
      },
    },
  });
  var DaysSwiper = new Swiper(".DaysSwiper", {
    slidesPerView: 10,
    spaceBetween: 30,
    slidesPerView: "auto",
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-day",
      prevEl: ".swiper-button-prev-day",
    },
  });
  var PlayersSwiper = new Swiper(".playersSwiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination-players",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-players",
      prevEl: ".swiper-button-prev-players",
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
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
	var EventsSwiper = new Swiper(".eventsSwiper", {
		slidesPerView: 1,
		loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
		breakpoints: {
			0: {
				slidesPerView: 1.25,
				spaceBetween: 30,
			},
			640: {
				slidesPerView: 2,
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
		}
	});
  var NewsSwiper = new Swiper(".newsSwiper", {
		slidesPerView: 1,
		loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
		breakpoints: {
			0: {
				slidesPerView: 1.25,
				spaceBetween: 30,
			},
			640: {
				slidesPerView: 2,
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
		}
	});
  for (
    let i = 1;
    i <= document.querySelectorAll(".main-swiper-gallery").length;
    i++
  ) {
    var thumbsSwiper = new Swiper(`.thumbs-swiper-gallery-${i}`, {
      spaceBetween: 30,
      slidesPerView: 3,
      freeMode: true,
      slidesPerView: "auto",
      autoplay: 3000,
      loop: true,
      centeredSlides: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: `.swiper-button-next-gallery-${i}`,
        prevEl: `.swiper-button-prev-gallery-${i}`,
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
      },
    });
    var mainSwiper = new Swiper(`.main-swiper-gallery-${i}`, {
      loop: true,
      navigation: {
        nextEl: `.swiper-button-next-gallery-${i}`,
        prevEl: `.swiper-button-prev-gallery-${i}`,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  }
});

// :: => PopUp
const togglePopup = (id) => {
  // Close all popups
  document.querySelectorAll(".popup-container").forEach((popup) => {
    popup.style.display = "none";
  });

  // Open the requested popup
  document.getElementById(id).style.display = "flex";
};
const closePopup = (id) => {
  document.getElementById(id).style.display = "none";
};
