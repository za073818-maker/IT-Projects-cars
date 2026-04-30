// dark-light mode

// specific
const btoo = document.getElementById("theme-btn");
const hero = document.getElementById("her");
const dropmenu = document.getElementById("bolding");

btoo.addEventListener("click", function () {
  hero.classList.toggle("light");
  dropmenu.classList.toggle("bold");
});

// lights everyhing
function toggleTheme() {
  document.documentElement.classList.toggle("light-mode");

  const btoo = document.getElementById("theme-btn");
  const btn = document.querySelector("theme-btn");

  if (document.documentElement.classList.contains("light-mode")) {
    btn.textContent = "🌙 Dark Mode";
  } else {
    btn.textContent = "☀️ Light Mode";
  }
}

// scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  if (window.scrollY > 20) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// burger menu
function burg() {
  const menu = document.getElementById("mobile-menu");
  const light = document.getElementById("her");
  const body = document.body;
  const footer1 = document.getElementById("footer1");
  const footer2 = document.getElementById("footer2");

  menu.classList.toggle("active");
  light.classList.toggle("active");
  body.classList.toggle("no-scroll");
  footer1.classList.toggle("active");
  footer2.classList.toggle("active");
}

// product button in burger menu -> removing hovering, just clicking
function btn_drop() {
  const dbtn = document.getElementById("dbtn");
  const parentContainer = dbtn.closest(".dropdown");

  parentContainer.classList.toggle("dehover");
}
