document.addEventListener("DOMContentLoaded", function () {
  // Add Class Active When To (.nav-bar) When Scroll *************************************************************************************
  let zeroValue = 0;
  window.addEventListener("scroll", function () {
    if (window.scrollY < 100) {
      document.querySelector(".nav-bar").classList.remove("active");
    } else {
      document.querySelector(".nav-bar").classList.add("active");
    }

    if (window.scrollY > zeroValue) {
      document.querySelector(".nav-bar").classList.add("hide");
    } else {
      document.querySelector(".nav-bar").classList.remove("hide");
    }
    zeroValue = window.scrollY;
  });

  // Open Navbar Menu on Responsive *************************************************************************************
  document.querySelectorAll(".open-nav-bar").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.innerWidth <= 1024) {
        document.getElementById("open-nav-bar-menu").classList.toggle("active");
        document.body.classList.toggle("active");
      }
    });
  });

  // Navbar Links Settings *************************************************************************************
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

  // Make AR-Tabs
  document.querySelectorAll(".tab-container").forEach(function (container) {
    var tabs = container.querySelectorAll(".tab");
    var contents = container.querySelectorAll(".ar-box-content");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (tab) {
          tab.classList.remove("active");
        });
        this.classList.add("active");

        var val = this.getAttribute("data-filterTab");
        contents.forEach(function (content) {
          content.classList.add("tab-hide");
          if (content.getAttribute("data-filterTab") === val || val === "all") {
            content.classList.remove("tab-hide");
          }
        });
      });
    });
  });

  // Make accordion
  document.querySelectorAll(".accordion-box").forEach((accordionBox) => {
    const headers = accordionBox.querySelectorAll(".accordion-header");
    headers.forEach((header) => {
      header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const isOpen = content.classList.contains("open");
        accordionBox.querySelectorAll(".accordion-content").forEach((item) => {
          item.classList.remove("open");
        });
        accordionBox.querySelectorAll(".accordion-header").forEach((header) => {
          header.classList.remove("open");
        });
        if (!isOpen) {
          content.classList.add("open");
          this.classList.add("open");
        }
      });
    });
  });
  
  function buildHeading(element) {
    if (!element) return;

    const iconHTML = element.getAttribute("icon");
    const wordsText = element.getAttribute("words");

    element.innerHTML = "";

    if (iconHTML) {
      const iconWrapper = document.createElement("i");
      iconWrapper.innerHTML = iconHTML;
      element.appendChild(iconWrapper);
    }

    if (wordsText) {
      wordsText.split(" ").forEach((word) => {
        const span = document.createElement("span");
        span.textContent = word;
        element.appendChild(span);
      });
    }
  }

  const headings = document.querySelectorAll("[words][icon]");
  headings.forEach(buildHeading);
});

var testimonialUsersSwiper = new Swiper(".testimonial-users-swiper", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
});

var testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  thumbs: {
    swiper: testimonialUsersSwiper,
  },
});
