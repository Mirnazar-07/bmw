"use strict";
let hBurger = document.querySelector(".header__burger");
let hClose = document.querySelector(".header__close");
let hNav = document.querySelector(".header__nav");
hBurger.addEventListener("click", function () {
  hNav.classList.remove("burg");
});
hClose.addEventListener("click", function () {
  hNav.classList.add("burg");
});

