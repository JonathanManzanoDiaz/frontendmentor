const hamb = document.querySelector(".hamb");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const closeIcon = document.querySelector(".closeIcon");
const sect1 = document.querySelector("#section1");
const sect2 = document.querySelector("#section2");
const sect3 = document.querySelector("#section3");
const sect4 = document.querySelector("#section4");
const articles = document.querySelector(".articles");
const backBtn = document.querySelectorAll(".backBtn");
const bookmark = document.querySelector(".bookmark");
const gotit = document.querySelector(".gotit");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const inputN1 = document.querySelector(".inputN1");
const inputN2 = document.querySelector(".inputN2");
const thanks = document.querySelector(".modalThanks");
const continueBtn = document.querySelectorAll(".continue");

hamb.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    hamb.setAttribute("src", "./images/icon-close-menu.svg");
  } else {
    menu.classList.add("show");
    hamb.setAttribute("src", "./images/icon-hamburger.svg");
  }
});

backBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("backthis")) {
      sect4.classList.toggle("show");
      inputN1.classList.remove("show");
      inputN2.classList.remove("show");
      btn1.checked = true;
    } else if (item.classList.contains("bamboo")) {
      sect4.classList.toggle("show");
      inputN1.classList.remove("show");
      inputN2.classList.remove("show");
      btn2.checked = true;
    } else if (item.classList.contains("black")) {
      sect4.classList.toggle("show");
      inputN1.classList.remove("show");
      inputN2.classList.remove("show");
      btn3.checked = true;
    }
  });
});

continueBtn.forEach((item2) => {
  item2.addEventListener("click", () => {
    if (item2.classList.contains("continue1")) {
      sect1.classList.add("show");
      sect2.style.display = "none";
      header.style.display = "none";
      sect3.classList.add("show");
      sect4.classList.add("show");
      thanks.style.display = "flex";
    } else if (item2.classList.contains("continue2")) {
      sect1.classList.add("show");
      sect2.style.display = "none";
      header.style.display = "none";
      sect3.classList.add("show");
      sect4.classList.add("show");
      thanks.style.display = "flex";
    }
  });
});

closeIcon.addEventListener("click", () => {
  sect4.classList.add("show");
});

gotit.addEventListener("click", () => {
  sect1.classList.remove("show");
  sect2.style.display = "flex";
  header.style.display = "flex";
  sect3.classList.remove("show");
  sect4.classList.add("show");
  thanks.style.display = "none";
});
