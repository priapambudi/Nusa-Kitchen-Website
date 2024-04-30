// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
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
