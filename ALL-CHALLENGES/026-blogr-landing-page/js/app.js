const hamb = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const headingLi = document.querySelectorAll(".headingLi");
const menuBox = document.querySelectorAll(".menuBox2");
hamb.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    hamb.src = "../images/icon-close.svg";
  } else {
    menu.classList.add("show");
    hamb.src = "../images/icon-hamburger.svg";
  }
});

headingLi.forEach((item) => {
  item.addEventListener("click", () => {
    item.childNodes[3].classList.toggle("show");
  });
});
