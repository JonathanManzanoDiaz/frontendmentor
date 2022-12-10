const hamb = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamb.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    hamb.setAttribute("src", "./images/icon-close.svg");
  } else {
    menu.classList.add("show");
    hamb.setAttribute("src", "./images/icon-hamburger.svg");
  }
});
