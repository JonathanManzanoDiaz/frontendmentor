const menu = document.querySelector(".icon-menu");
const navItems = document.querySelector(".navItems");
const navbar = document.querySelector(".navbarMobile");
const btnClose = document.querySelector(".btnClose");
menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

btnClose.addEventListener("click", () => {
  navbar.classList.add("show");
});
