"use strict";

const btnSubscribe = document.querySelector(".button-subscribe");
const btnDismiss = document.querySelector(".button-dismiss");

const newsletterContainer = document.querySelector(".newsletter-container");
const successContainer = document.querySelector(".success-container");

const inputEmail = document.getElementById("email");
const errorMessage = document.querySelector(".error");
const personalEmail = document.getElementById("personal-email");

const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Error message disappearing with correct email input

inputEmail.addEventListener("input", function () {
  if (validEmail.test(inputEmail.value)) {
    errorMessage.style.display = "none";
  }
});

//Button subscribe event listener

btnSubscribe.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputEmail.value === "" || !validEmail.test(inputEmail.value)) {
    errorMessage.style.display = "block";
  } else {
    newsletterContainer.style.display = "none";
    successContainer.style.display = "grid";
  }

  personalEmail.innerHTML = inputEmail.value;
  inputEmail.value = "";
});

//Button dismiss event listener

btnDismiss.addEventListener("click", function (e) {
  e.preventDefault();

  successContainer.style.display = "none";
  newsletterContainer.style.display = "grid";
});
