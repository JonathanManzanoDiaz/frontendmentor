const square = document.querySelector(".square");
const template = document.getElementById("template");
const temp = document.getElementById("temp");
const fragment = document.createDocumentFragment();

const url = "./data.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => printData(data));

const printData = (data) => {
  data.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".day").textContent = item.day;
    const barH = clone.querySelector(".bar");
    const itemA = item.amount * 1.3;
    barH.style.height = `${itemA}px`;
    barH.style.width = "25px";
    if (item.day === "wed") {
      barH.style.background = "hsl(186, 34%, 60%)";
    }
    barH.addEventListener("mouseenter", (event) => {
      const itemS = document.querySelector(".itemS");
      itemS.textContent = item.amount;
    });
    fragment.appendChild(clone);
  });
  square.appendChild(fragment);
};
