// lights everyhing
function toggleTheme() {
  document.documentElement.classList.toggle("light-mode");

  const btn = document.querySelector("theme-btn");

  if (document.documentElement.classList.contains("light-mode")) {
    btn.textContent = "🌙 Dark Mode";
  } else {
    btn.textContent = "☀️ light-Mode";
  }
}

// scroll
const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");

function handleScroll() {
  if (
    window.scrollY > 20 ||
    (mobileMenu && mobileMenu.scrollTop > 20)
  ) {
    header.classList.add("shrink");
    mobileMenu.classList.add("shrink")
  } else {
    header.classList.remove("shrink");
    mobileMenu.classList.remove("shrink");
  }
}

window.addEventListener("scroll", handleScroll);

if (mobileMenu) {
  mobileMenu.addEventListener("scroll", handleScroll);
}

// burger menu
function burg() {
  const menu = document.getElementById("mobile-menu");
  const body = document.body;
  const footer = document.getElementById("footer");

  menu.classList.toggle("active");
  body.classList.toggle("no-scroll");
  footer.classList.toggle("active");
}

// product button in burger menu -> removing hovering, just clicking
function btn_drop() {
  const dbtn = document.getElementById("dbtn");
  const parentContainer = dbtn.closest(".dropdown");

  parentContainer.classList.toggle("dehover");
}