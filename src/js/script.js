// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Menu
const foodBtn = document.querySelector("#foodBtn");
const beverageBtn = document.querySelector("#beverageBtn");
const dessertBtn = document.querySelector("#dessertBtn");

const foodMenu = document.querySelector("#food");
const beverageMenu = document.querySelector("#beverage");
const dessertMenu = document.querySelector("#dessert");

foodBtn.addEventListener("click", function (e) {
  foodMenu.classList.remove("hidden");
  beverageMenu.classList.add("hidden");
  dessertMenu.classList.add("hidden");
  e.preventDefault();
});

beverageBtn.addEventListener("click", function (e) {
  foodMenu.classList.add("hidden");
  beverageMenu.classList.remove("hidden");
  dessertMenu.classList.add("hidden");
  e.preventDefault();
});

dessertBtn.addEventListener("click", function (e) {
  foodMenu.classList.add("hidden");
  beverageMenu.classList.add("hidden");
  dessertMenu.classList.remove("hidden");
  e.preventDefault();
});
