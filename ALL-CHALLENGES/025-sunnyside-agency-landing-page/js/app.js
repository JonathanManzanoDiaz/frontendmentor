const hamb = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuShow = document.querySelector(".menuShow");

hamb.addEventListener("click", () => {
  menuShow.classList.toggle("show");
});
