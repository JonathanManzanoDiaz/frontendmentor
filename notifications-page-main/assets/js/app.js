const noti = document.querySelector(".notNum");
const mark = document.querySelector(".mark");
const dot = document.querySelectorAll(".dot");
const cardN = document.querySelectorAll(".cardN");
const card = document.querySelectorAll(".card");
mark.addEventListener("click", allRead);

function allRead() {
  noti.style.display = "none";
  dot.forEach((item) => (item.style.display = "none"));
  cardN.forEach((item) => (item.style.backgroundColor = "white"));
}

cardN.forEach((item) =>
  item.addEventListener("click", () => {
    item.style.backgroundColor = "white";
    let num = Number(noti.textContent);
    num--;
    noti.textContent = num;
    if (num === 0) {
      noti.style.display = "none";
      dot.forEach((item) => (item.style.display = "none"));
    }
  })
);
