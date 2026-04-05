/*
::
:: Theme Name: Home - Property Listing & Real Estate TailwindCss Template
:: Email: arcoder14@gmail.com
:: Author URI: https://themeforest.net/user/ar-coder
:: Author: ar-coder
:: Version: 1.0
::
*/

// :: Setup Loading Element
window.addEventListener("load", function () {
  document.querySelectorAll(".loading").forEach(function (element) {
    element.style.transition = "opacity 0.5s";
    element.style.opacity = 0;
    setTimeout(function () {
      element.style.display = "none";
      document.body.classList.remove("overflow-hidden");
    }, 100);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let zero = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const allNavbar = document.querySelector(".all-navbar");
    if (!allNavbar) return;
    if (scrollTop > allNavbar.offsetHeight) {
      allNavbar.classList.add("active");
    } else {
      allNavbar.classList.remove("active");
    }
    allNavbar.classList.toggle("hide-box", scrollTop > zero);
    zero = scrollTop;
  });

  // :: Navbar Links Settings - Mobile Only
  document.querySelectorAll(".has-menu > a").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (window.innerWidth < 1024) {
        e.preventDefault();

        document
          .querySelectorAll(".has-menu > a")
          .forEach(function (otherItem) {
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
      }
    });
  });

  // :: Clean up active classes when resizing to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      document
        .querySelectorAll(".has-menu > a.active")
        .forEach(function (item) {
          item.classList.remove("active");
          var nextElement = item.nextElementSibling;
          if (nextElement && nextElement.tagName === "UL") {
            nextElement.classList.remove("active");
          }
        });
    }
  });

  // :: Circular Text Box
  document.querySelectorAll(".circular-text-box").forEach((box) => {
    const text = box.dataset.text;
    const size = box.dataset.size;
    if (!text) return;

    const letters = [...text];
    const radius = size / 4;
    const angleStep = 360 / letters.length;

    box.innerHTML = "";

    letters.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.className = `absolute flex items-start justify-center origin-center text-center`;

      const angle = index * angleStep;
      span.style.transform = `rotate(${angle}deg) translateY(${radius * -1}px)`;
      span.style.inset = `${size * 0.25}px`;

      box.appendChild(span);
    });
  });

  // :: Popup Videos
  document.querySelectorAll(".modalVideos").forEach(function (modal) {
    var span = modal.querySelector(".close");
    var iframe = modal.querySelector(".youtube-video");
    var buttons = document.querySelectorAll(".open-popup-video-btn");
    buttons.forEach(function (btn) {
      btn.onclick = function () {
        modal.classList.add("opacity-100", "visible");
        modal.classList.remove("opacity-0", "invisible");

        var videoUrl = btn.getAttribute("data-url");
        iframe.src = videoUrl;
      };
    });
    span.onclick = function () {
      modal.classList.remove("opacity-100", "visible");
      modal.classList.add("opacity-0", "invisible");
      iframe.src = "";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.classList.remove("opacity-100", "visible");
        modal.classList.add("opacity-0", "invisible");
        iframe.src = "";
      }
    };
  });

  // :: Setup Dynamic Tabs
  document.querySelectorAll(".price-slider-item").forEach((item) => {
    const slider = item.querySelector(".slider");
    const valueMinEl = item.querySelector(".slider-value-min");
    const valueMaxEl = item.querySelector(".slider-value-max");

    const dataEl = item.querySelector("[data-min]");

    // Read data attributes
    const currency = dataEl.dataset.currency || "";
    const title = dataEl.dataset.title || "";
    const min = Number(dataEl.dataset.min) || 0;
    const max = Number(dataEl.dataset.max) || 100;
    const startMin = Number(dataEl.dataset.startMin) || min;
    const startMax = Number(dataEl.dataset.startMax) || max;
    const step = Number(dataEl.dataset.step) || 1;

    // Initialize slider
    noUiSlider.create(slider, {
      start: [startMin, startMax],
      connect: true,
      step: step,
      range: {
        min,
        max,
      },
      tooltips: true,
    });

    const handles = slider.querySelectorAll(".noUi-handle");

    handles.forEach((handle, index) => {
      handle.setAttribute(
        "aria-label",
        index === 0 ? `Minimum ${title}` : `Maximum ${title}`,
      );
    });

    const formatNumber = (num) => new Intl.NumberFormat().format(num);

    slider.noUiSlider.on("update", (values) => {
      valueMinEl.textContent = `${currency}${formatNumber(values[0])}`;
      valueMaxEl.textContent = `${currency}${formatNumber(values[1])}`;
    });
  });

  // Setup NiceSelect Js
  document.querySelectorAll(".ar-nice-select").forEach(function (el) {
    const options = {
      searchable: el.dataset.searchable === "true",
      placeholder: el.dataset.placeholder || "Select...",
      searchtext: el.dataset.searchtext || "Search",
      selectedtext: el.dataset.selectedtext || "selected",
    };

    NiceSelect.bind(el, options);
  });

  // :: Helper Tool (toggle-btn)
  document.querySelectorAll(".toggle-btn").forEach((item) => {
    let outsideHandler = null;

    item.addEventListener("click", (e) => {
      e.preventDefault();

      const toggleClass = item.dataset.toggleClass || "";
      const isOutside = item.dataset.outSide === "true";

      let otherElements = [];

      try {
        otherElements = JSON.parse(item.dataset.otherElement || "[]");
      } catch {
        otherElements = [];
      }

      if (toggleClass) {
        item.classList.toggle(toggleClass);
      }

      let allTargets = [];

      otherElements.forEach(([selector, cls]) => {
        const els = document.querySelectorAll(selector);
        els.forEach((el) => {
          el.classList.toggle(cls);
          allTargets.push(el);
        });
      });

      if (outsideHandler) {
        document.removeEventListener("click", outsideHandler);
      }

      if (isOutside) {
        outsideHandler = (event) => {
          const insideButton = item.contains(event.target);
          const insideTarget = allTargets.some((el) =>
            el.contains(event.target),
          );

          if (!insideButton && !insideTarget) {
            item.classList.remove(toggleClass);

            otherElements.forEach(([selector, cls]) => {
              document.querySelectorAll(selector).forEach((el) => {
                el.classList.remove(cls);
              });
            });

            document.removeEventListener("click", outsideHandler);
          }
        };

        setTimeout(() => {
          document.addEventListener("click", outsideHandler);
        }, 0);
      }
    });
  });

  // :: Setup Dynamic Tabs
  document.querySelectorAll(".tabs").forEach((group) => {
    const buttons = group.querySelectorAll(".tab-btn");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.tab;

        buttons.forEach((b) => {
          b.setAttribute("aria-selected", "false");
          b.querySelector(".indicator")?.classList.add("scale-x-0");
          b.querySelector(".indicator")?.classList.remove("scale-x-100");
        });

        btn.setAttribute("aria-selected", "true");
        btn.querySelector(".indicator")?.classList.remove("scale-x-0");
        btn.querySelector(".indicator")?.classList.add("scale-x-100");

        group.querySelectorAll(".tab-panel").forEach((panel) => {
          panel.classList.add("hidden", "opacity-0", "translate-y-2");
          panel.classList.remove("opacity-100", "translate-y-0");
        });

        const activePanel = document.getElementById(target);

        if (activePanel) {
          activePanel.classList.remove("hidden");

          setTimeout(() => {
            activePanel.classList.remove("opacity-0", "translate-y-2");
            activePanel.classList.add("opacity-100", "translate-y-0");
          }, 10);
        }
      });
    });
  });

  // :: Init Property Slider
  function initPropertySlider(selector, nextEl, prevEl, options = {}) {
    const {
      loop = false,
      autoplay = false,
      autoplayDelay = 4000,
      breakpoints = {},
      ...restOptions
    } = options;

    return new Swiper(selector, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 400,
      loop,

      navigation: {
        nextEl,
        prevEl,
        ...(restOptions.navigation || {}),
      },

      ...(autoplay && {
        autoplay: {
          delay: autoplayDelay,
          disableOnInteraction: false,
          ...(typeof autoplay === "object" ? autoplay : {}),
        },
      }),

      breakpoints,
      ...restOptions,
    });
  }
  const sliders = [
    initPropertySlider(
      ".property-item-slider",
      ".property-item-slider-next",
      ".property-item-slider-prev",
    ),

    initPropertySlider(
      ".property-item-slider-2",
      ".property-item-slider-next-2",
      ".property-item-slider-prev-2",
    ),

    initPropertySlider(
      ".property-item-slider-3",
      ".property-item-slider-next-3",
      ".property-item-slider-prev-3",
    ),

    initPropertySlider(
      ".featured-property-slider",
      ".featured-property-slider-next",
      ".featured-property-slider-prev",
      {
        autoplay: true,
        loop: true,
      },
    ),

    initPropertySlider(
      ".testimonials-slider",
      ".testimonials-slider-next",
      ".testimonials-slider-prev",
      {
        autoplay: true,
        autoplayDelay: 3000,
        effect: "fade",
        loop: true,
      },
    ),
  ];
});
