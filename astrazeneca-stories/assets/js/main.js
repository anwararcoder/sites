/*
::
:: Theme Name: AstraZeneca Stories
:: Email: Nourramadan144@gmail.com
:: Author URI: https://themeforest.net/user/ar-coder
:: Author: ar-coder
:: Version: 1.0
::
*/

window.addEventListener("load", function () {
  // Setup Loading Box *************************************************************************************
  document.querySelectorAll(".loading").forEach(function (element) {
    element.style.transition = "opacity 0.5s";
    element.style.opacity = 0;
    setTimeout(function () {
      element.style.display = "none";
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const allItems = document.querySelectorAll(".reel-item");
  const allVideos = document.querySelectorAll(".item-video");

  allItems.forEach((item) => {
    const video = item.querySelector(".item-video");
    const playButton = item.querySelector(".play-video");
    const progressBar = item.querySelector(".progress-bar");

    // Ensure video is paused, unmuted, and not looped
    video.pause();
    video.muted = false;
    video.loop = false;

    // Play/pause on button click
    playButton.addEventListener("click", function () {
      // Pause all other videos
      allVideos.forEach((v) => {
        if (v !== video) {
          v.pause();
          v.closest(".reel-item")?.classList.remove("videoIsPlay");
        }
      });

      video.muted = false;
      if (video.paused) {
        video.currentTime = 0; 
        progressBar.style.width = `0%`;
        video.play();
      } else {
        video.pause();
        video.currentTime = 0; 
        progressBar.style.width = `0%`;
      }
    });

    // Add/remove playing class
    video.addEventListener("play", function () {
      item.classList.add("videoIsPlay");
    });

    video.addEventListener("pause", function () {
      item.classList.remove("videoIsPlay");
      progressBar.style.width = `0%`;
      video.currentTime = 0; 
    });

    // Update progress bar
    video.addEventListener("timeupdate", function () {
      const percent = (video.currentTime / video.duration) * 100;
      progressBar.style.width = `${percent}%`;
    });

    // Reset progress when video ends
    video.addEventListener("ended", function () {
      item.classList.remove("videoIsPlay");
      progressBar.style.width = `0%`;
    });

    video.addEventListener("dblclick", function () {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          // Safari
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          // IE11
          video.msRequestFullscreen();
        }
      }
    });
  });

  // :: Swiper Header
  var swiper = new Swiper(".reels-responsive-swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
      el: ".reels-responsive-swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        // Pause all videos when slide changes
        const allVideos = document.querySelectorAll(".item-video");
        allVideos.forEach((video) => {
          video.pause();
          video.currentTime = 0;
          const item = video.closest(".reel-item");
          if (item) {
            item.classList.remove("videoIsPlay");
            const button = item.querySelector(".play-video");
            if (button) {
              // Reset button to play state
              const playSpan = button.querySelector("span:first-of-type");
              const pauseSpan = button.querySelector("span:last-of-type");
              const playIcon = button.querySelector("svg:first-of-type");
              const pauseIcon = button.querySelector("svg:last-of-type");

              playSpan.classList.remove("hidden");
              pauseSpan.classList.add("hidden");
              playIcon.classList.remove("hidden");
              pauseIcon.classList.add("hidden");
            }
          }
        });
      },
    },
  });
});
const addClassToTarget = (targetId, className = "active") => {
  document.getElementById(targetId).classList.toggle(className);
};

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

  // :: Swiper Header
  var swiper = new Swiper(".header-swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".header-swiper-pagination",
      clickable: true,
    },
  });

  // :: Dropdown Menu
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const menu = dropdown.querySelector(".dropdown-menu");

    button.addEventListener("click", () => {
      document.querySelectorAll(".dropdown").forEach((item) => {
        item.classList.remove("open");
      });
      const isOpen = menu.classList.contains("open");
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("open");
      });
      document.querySelectorAll(".dropdown button").forEach((button) => {
        button.classList.remove("open");
      });
      if (!isOpen) {
        menu.classList.add("open");
        button.classList.add("open");
        dropdown.classList.add("open");
      }
    });
  });

  // :: Close Dropdown Menu
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.querySelector(".dropdown-menu").classList.remove("open");
        dropdown.querySelector("button").classList.remove("open");
        dropdown.classList.remove("open");
      }
    });
  });

  document.querySelectorAll(".js-choice").forEach(function (item) {
    const choices = new Choices(item, {
      // searchEnabled: true,
      removeItemButton: true,
      allowHTML: true,
    });
  });
});

// ===============================================> :: Popup <===============================================
const togglePopup = (id) => {
  document.querySelectorAll(".popup-container").forEach((popup) => {
    popup.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
};
const closePopup = (id) => {
  document.getElementById(id).classList.remove("active");
};
// ===============================================> :: Popup Video <===============================================
const players = {};
const togglePopupVideo = (id, videoUrl) => {
  document.querySelectorAll(".popup-video-container").forEach((popup) => {
    popup.classList.remove("active");
  });

  const popup = document.getElementById(id);
  if (popup) {
    popup.classList.add("active");

    const playerItem = popup.querySelector(".player");
    if (playerItem) {
      playerItem.src = videoUrl;
      playerItem.load();
      if (players[id]) {
        players[id].destroy();
        delete players[id];
      }
      players[id] = new Plyr(playerItem, {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
      });
      players[id].on("ready", (event) => {
        const instance = event.detail.plyr;
        console.log("Video URL:", instance.source);
      });
    }
  }
};
const closePopupVideo = (id) => {
  const popup = document.getElementById(id);
  if (popup) {
    popup.classList.remove("active");

    if (players[id]) {
      players[id].destroy();
      delete players[id];
    }
  }
};

// ===============================================> :: Slider Video <===============================================
const player = new Plyr(".featured-player", {
  controls: [
    "play-large",
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
    "captions",
    "settings",
    "pip",
    "fullscreen",
  ],
  settings: ["captions", "quality", "speed"],
});
const featuredSwiper = new Swiper(".featured-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".featured-swiper-button-next",
    prevEl: ".featured-swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
const playlistItems = document.querySelectorAll(".playlist-item");
let currentActiveId = "1";
playlistItems.forEach((item) => {
  const id = item.getAttribute("data-id");
  const videoSrc = item.getAttribute("data-video-src");
  const title = item.getAttribute("data-title");
  const subTitle = item.getAttribute("data-subTitle");
  const thumbnail = item.getAttribute("data-thumbnail");
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="relative cursor-pointer" data-id="${id}" onclick="changeTrack('${id}', '${videoSrc}', '${title}', '${subTitle}')">
        <h5 class="absolute inset-0 z-30 flex items-center justify-center text-[20px] font-[700]">${title}</h5>
        <img class="w-full rounded-[12px]" src="${thumbnail}" alt="${title}" />
        <div
            class="block absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#0D0C0F] to-[#0D0C0F]/0">
        </div>
        <div
            class="block absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#0D0C0F]/0 to-[#0D0C0F]">
        </div>
        <div
            class="block absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-[#0D0C0F]/10 via-[#0D0C0F]/10 via-50% to-[#0D0C0F]/50">
        </div>
    </div>
  `;
  featuredSwiper.appendSlide(slide);
});
const firstItem = playlistItems[0];
loadVideo(firstItem.getAttribute("data-video-src"));
document.getElementById("current-title").textContent =
  firstItem.getAttribute("data-title");
document.getElementById("current-subTitle").textContent =
  firstItem.getAttribute("data-subTitle");

function loadVideo(src) {
  const videoElement = document.getElementById("featured-player");
  videoElement.querySelector("source").src = src;
  videoElement.load();
}
function changeTrack(id, videoSrc, title, subTitle) {
  loadVideo(videoSrc);

  document.getElementById("current-title").textContent = title;
  document.getElementById("current-subTitle").textContent = subTitle;

  currentActiveId = id;
  player.play();
}
player.on("ended", function () {
  let nextItem;
  playlistItems.forEach((item, index) => {
    if (item.getAttribute("data-id") === currentActiveId) {
      const nextIndex = (index + 1) % playlistItems.length;
      nextItem = playlistItems[nextIndex];
    }
  });
  if (nextItem) {
    const id = nextItem.getAttribute("data-id");
    const videoSrc = nextItem.getAttribute("data-video-src");
    const title = nextItem.getAttribute("data-title");
    const subTitle = nextItem.getAttribute("data-subTitle");
    changeTrack(id, videoSrc, title, subTitle);
  }
});
function navigateVideo(direction) {
  let currentIndex = -1;
  let nextIndex = -1;

  // Find current index
  playlistItems.forEach((item, index) => {
    if (item.getAttribute("data-id") === currentActiveId) {
      currentIndex = index;
    }
  });

  if (currentIndex !== -1) {
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % playlistItems.length;
    } else if (direction === "prev") {
      nextIndex =
        (currentIndex - 1 + playlistItems.length) % playlistItems.length;
    }

    const nextItem = playlistItems[nextIndex];
    const id = nextItem.getAttribute("data-id");
    const videoSrc = nextItem.getAttribute("data-video-src");
    const title = nextItem.getAttribute("data-title");
    const subTitle = nextItem.getAttribute("data-subTitle");

    changeTrack(id, videoSrc, title, subTitle);

    // Also navigate the swiper to the corresponding slide
    featuredSwiper.slideTo(nextIndex);
  }
}
document
  .querySelector(".featured-swiper-button-next")
  .addEventListener("click", function () {
    navigateVideo("next");
  });
document
  .querySelector(".featured-swiper-button-prev")
  .addEventListener("click", function () {
    navigateVideo("prev");
  });
document.querySelector(".featured-swiper-button-next").innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
document.querySelector(".featured-swiper-button-prev").innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
