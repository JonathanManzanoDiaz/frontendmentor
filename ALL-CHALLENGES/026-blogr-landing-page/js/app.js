// A $( document ).ready() block.
$(document).ready(function () {
  const close = document.querySelector(".close");
  const menu = document.querySelector(".menu");
  const headingLi = document.querySelectorAll(".headingLi");
  const menuBox = document.querySelectorAll(".menuBox2");
  $("#hamb").click(function () {
    $("#menu").toggle("show");
  });
});
