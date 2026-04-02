/*
::
:: Theme Name: CloudX - Premium Hosting Template
:: Email: arcoder14@gmail.com
:: Author URI: https://themeforest.net/user/ar-coder
:: Author: ar-coder
:: Version: 1.0
:: 
*/

window.addEventListener("load", function () {
  document.querySelectorAll(".loading").forEach(function (element) {
    element.style.transition = "opacity 0.5s";
    element.style.opacity = 0;
    setTimeout(function () {
      element.style.display = "none";
    }, 100);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Make AR-Dropdown Menu
  document.querySelectorAll(".ar-dropdown .title").forEach(function (current) {
    current.addEventListener("mouseover", function () {
      this.parentNode.classList.add("open");
    });

    // Modify the mouseout event listener
    current.addEventListener("mouseout", function (e) {
      const relatedTarget = e.relatedTarget || e.toElement;
      if (!this.parentNode.contains(relatedTarget)) {
        this.parentNode.classList.remove("open");
      }
    });
  });
  document.addEventListener("mouseover", function (e) {
    const arDropdownMenus = document.querySelectorAll(".ar-dropdown");
    arDropdownMenus.forEach(function (arDropdownMenu) {
      if (!arDropdownMenu.contains(e.target)) {
        arDropdownMenu.classList.remove("open");
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

  // Add Class Active When To (.all-navbar) When Scroll
  window.addEventListener("scroll", function () {
    if (window.pageYOffset < 50) {
      document.querySelector(".all-navbar").classList.remove("active");
    } else {
      document.querySelector(".all-navbar").classList.add("active");
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

  // Open Menu Box
  document.querySelectorAll(".open-menu-box").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("menu-box").classList.toggle("active");
    });
  });

  // Popup Videos
  document.querySelectorAll(".modalVideos").forEach(function (modal) {
    var span = modal.querySelector(".close");
    var iframe = modal.querySelector(".youtube-video");
    var buttons = document.querySelectorAll(".open-popup-video-btn");
    buttons.forEach(function (btn) {
      btn.onclick = function () {
        modal.style.display = "flex";
        var videoUrl = btn.getAttribute("data-url");
        iframe.src = videoUrl;
      };
    });
    span.onclick = function () {
      modal.style.display = "none";
      iframe.src = "";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        iframe.src = "";
      }
    };
  });

  // Remove class box-hide
  document.querySelectorAll(".more-customers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      item.classList.toggle("active");
      document
        .querySelectorAll(".customer-box.box-hide")
        .forEach(function (box) {
          box.classList.remove("box-hide");
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

  // Add class active to scroll up
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      document.querySelector(".scroll-up").classList.add("active");
    } else {
      document.querySelector(".scroll-up").classList.remove("active");
    }
  });

  // Setup js-choice
  document.querySelectorAll(".js-choice").forEach(function (item) {
    const choices = new Choices(item, {
      // searchEnabled: true,
      removeItemButton: true,
      allowHTML: true,
    });
  });
});