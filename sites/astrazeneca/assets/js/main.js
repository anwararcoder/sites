/*
::
:: Theme Name: AstraZeneca
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
  // Add Class Active When To (.all-navbar) When Scroll *************************************************************************************
  window.addEventListener("scroll", function () {
    if (window.pageYOffset < 50) {
      document.querySelector(".nav-bar").classList.remove("active");
    } else {
      document.querySelector(".nav-bar").classList.add("active");
    }
  });

  // Open Navbar Menu on Responsive *************************************************************************************
  document.querySelectorAll(".open-nav-bar").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("open-nav-bar-menu").classList.toggle("active");
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

  // Setup js-choice *************************************************************************************
  document.querySelectorAll(".js-choice").forEach(function (item) {
    const choices = new Choices(item, {
      searchEnabled: true,
      removeItemButton: true,
    });
  });

  // Questions Box *************************************************************************************
  document
    .querySelectorAll(".row-inputs-questions")
    .forEach(function (container) {
      const inputOne = container.querySelector(".input-one");
      const inputTwo = container.querySelector(".input-two");
      const boxContent = container.querySelector(".box-content");
      const svgOne = container.querySelector(".svg-one");
      const svgTwo = container.querySelector(".svg-two");

      inputOne.addEventListener("change", () => {
        if (inputOne.checked) {
          inputTwo.checked = false;
          inputOne.classList.add("active");
          inputTwo.classList.remove("active");
          if (svgOne) {
            svgOne.style.fill = "#831A54";
          }
          if (svgTwo) {
            svgTwo.style.fill = "#B5B5B5";
          }
          boxContent.classList.remove("hidden");
        } else {
          inputOne.classList.remove("active");
          if (svgOne) {
            svgOne.style.fill = "#B5B5B5";
          }
          boxContent.classList.add("hidden");
        }
      });

      inputTwo.addEventListener("change", () => {
        if (inputTwo.checked) {
          inputOne.checked = false;
          inputTwo.classList.add("active");
          inputOne.classList.remove("active");
          if (svgTwo) {
            svgTwo.style.fill = "#831A54";
          }
          if (svgOne) {
            svgOne.style.fill = "#B5B5B5";
          }
          boxContent.classList.add("hidden");
        } else {
          inputTwo.classList.remove("active");
          if (svgTwo) {
            svgTwo.style.fill = "#B5B5B5";
          }
        }
      });
    });

    
    const resultButton = document.querySelector(".resultButton");
const resultDisplay = document.querySelector(".resultDisplay");
const pointsDisplay = document.querySelector(".points");
const pointsDisplay2 = document.querySelector(".points2");

function validateForm() {
  let isValid = true;

  if (!document.querySelector('input[name="gender"]:checked')) {
    isValid = false;
  }

  if (document.getElementById("ageGroup").value === "") {
    isValid = false;
  }

  if (!document.querySelector('input[name="Smoking"]:checked')) {
    isValid = false;
  } else {
    if (document.getElementById("YesSmoking").checked) {
      let cigaretteCount = document.querySelector(".cigaretteCount").value;
      let smokingYears = document.querySelector(".smokingYears").value;
      
      cigaretteCount = convertArabicNumbersToEnglishNumbers(cigaretteCount);
      smokingYears = convertArabicNumbersToEnglishNumbers(smokingYears);

      if (!cigaretteCount) {
        isValid = false;
      }
      if (!smokingYears) {
        isValid = false;
      }
    }
  }

  if (!document.querySelector('input[name="ChronicPhlegm"]:checked')) {
    isValid = false;
  }

  if (!document.querySelector('input[name="ShortnessOfBreath"]:checked')) {
    isValid = false;
  }

  if (!document.querySelector('input[name="ChronicCough"]:checked')) {
    isValid = false;
  }

  if (!document.querySelector('input[name="LungFunction"]:checked')) {
    isValid = false;
  }

  resultButton.disabled = !isValid;
  return isValid;
}

function addValidationListeners() {
  document.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("change", validateForm);
  });
}

function convertArabicNumbersToEnglishNumbers(number) {
  const arabicToEnglishMap = {
    '٠': '0',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9'
  };

  return number.split('').map(char => arabicToEnglishMap[char] || char).join('');
}

function calculatePoints() {
  let points = 0;

  if (document.getElementById("male").checked) {
    points += 1;
  }

  const ageGroup = document.getElementById("ageGroup").value;
  if (ageGroup === "selectOption3") {
    points += 1;
  }
  if (ageGroup === "selectOption4") {
    points += 2;
  }

  if (document.getElementById("YesSmoking").checked) {
    let cigarettesPerDay = document.querySelector(".cigaretteCount").value;
    let smokingYears = document.querySelector(".smokingYears").value;

    cigarettesPerDay = parseInt(convertArabicNumbersToEnglishNumbers(cigarettesPerDay));
    smokingYears = parseInt(convertArabicNumbersToEnglishNumbers(smokingYears));
    
    if (!isNaN(cigarettesPerDay) && !isNaN(smokingYears)) {
      const calcCigarettesPerDayAndSmokingYears = (cigarettesPerDay * (smokingYears * 365)) / 20;
      if (calcCigarettesPerDayAndSmokingYears >= 20 && calcCigarettesPerDayAndSmokingYears < 30) {
        points += 1;
      }
      if (calcCigarettesPerDayAndSmokingYears >= 30) {
        points += 2;
      }
    }
  }

  if (document.getElementById("YesChronicPhlegm").checked) {
    points += 1;
  }

  if (document.getElementById("YesShortnessOfBreath").checked) {
    points += 1;
  }

  if (document.getElementById("YesChronicCough").checked) {
    points += 1;
  }

  if (document.getElementById("YesLungFunction").checked) {
    points += 1;
  }

  pointsDisplay.textContent = points;
  pointsDisplay2.textContent = points;

  if (points >= 5) {
    togglePopup("WarningPopup");
  } else {
    togglePopup("ConfirmPopup");
  }
}

resultButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateForm()) {
    calculatePoints();
    resultDisplay.classList.remove("hidden");
  }
});

validateForm();
addValidationListeners();

    
  
});

// :: => PopUp *************************************************************************************
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
