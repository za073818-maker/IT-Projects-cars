// lights everyhing
function toggleTheme() {
  const html = document.documentElement;
  
  const isLight = html.classList.toggle("light-mode");
  
  localStorage.setItem("light-mode", isLight);
}

// scroll
const header = document.getElementById("header");
function handleScroll() {
  if (window.scrollY > 20) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
}
window.addEventListener("scroll", handleScroll);

// burger menu
function burg() {
  const menu = document.getElementById("mobile-menu");
  const body = document.body;
  const footer = document.getElementById("footer");
  const section = document.getElementById("her");
  const header = document.getElementById("header");

  section.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("no-scroll");
  footer.classList.toggle("active");
  header.classList.toggle("active");
}

// product button in burger menu -> removing hovering, just clicking
function btn_drop() {
  const dbtn = document.getElementById("dbtn");
  const drop = dbtn.closest(".dropdown");

  drop.classList.toggle("dehover");
}