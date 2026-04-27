// dark-light mode

const btoo = document.getElementById("theme-btn");
const hero = document.getElementById("her");

btoo.addEventListener("click", function () {
  hero.classList.toggle("light");
});

function toggleTheme() {
  document.documentElement.classList.toggle("light-mode");

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

  if (window.scrollY > 10) {
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

  menu.classList.toggle("active");
  light.classList.toggle("active");
  body.classList.toggle("no-scroll");
}